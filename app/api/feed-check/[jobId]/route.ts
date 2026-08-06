import { NextResponse } from "next/server";
import { getJob } from "@/lib/feed-checker/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Poll target for a running check. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const job = await getJob(jobId);

  if (!job) {
    return NextResponse.json(
      {
        status: "error",
        error:
          "That check has expired or was never started. Run it again — results are kept for an hour.",
      },
      { status: 404 }
    );
  }

  if (job.stage === "error") {
    return NextResponse.json({ status: "error", error: job.error });
  }

  if (job.stage === "done" && job.report) {
    return NextResponse.json({ status: "done", report: job.report });
  }

  return NextResponse.json({
    status: "running",
    stage: job.stage,
    message: job.message,
  });
}
