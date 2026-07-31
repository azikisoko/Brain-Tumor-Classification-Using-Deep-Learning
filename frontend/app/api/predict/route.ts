import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text();

      return NextResponse.json(
        {
          error: "FastAPI returned an error",
          status: response.status,
          details: text,
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Could not reach FastAPI",
      },
      {
        status: 500,
      }
    );
  }
}