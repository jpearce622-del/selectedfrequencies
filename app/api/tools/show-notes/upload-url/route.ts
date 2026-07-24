import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

// Allowed audio/video MIME types Deepgram supports
const ALLOWED_TYPES = [
  "audio/mpeg",
  "audio/mp3",
  "audio/mp4",
  "audio/m4a",
  "audio/x-m4a",
  "audio/wav",
  "audio/wave",
  "audio/x-wav",
  "audio/ogg",
  "audio/flac",
  "audio/webm",
  "video/mp4",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
];

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const contentType = clientPayload ?? "";
        if (
          !ALLOWED_TYPES.some(
            (t) => contentType === t || contentType.startsWith("audio/") || contentType.startsWith("video/")
          )
        ) {
          throw new Error("Unsupported file type. Upload an audio or video file.");
        }

        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: 500 * 1024 * 1024, // 500 MB
          tokenPayload: "",
        };
      },
      onUploadCompleted: async ({ blob }) => {
        // File successfully stored in Vercel Blob — processing happens separately.
        console.log("Blob upload completed:", blob.url);
      },
    });

    return Response.json(jsonResponse);
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
