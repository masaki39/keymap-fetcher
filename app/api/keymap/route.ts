import { NextRequest, NextResponse } from 'next/server';
import { parseKeys } from '../../lib/key-parser';
import { generateKeyboardSVG } from '../../lib/svg-generator';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const keysParam = request.nextUrl.searchParams.get('keys') ?? '';
  const highlighted = parseKeys(keysParam);
  const svg = generateKeyboardSVG(highlighted);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
