import { NextRequest, NextResponse } from 'next/server';
import { parseKeys } from '../../lib/key-parser';
import { generateKeyboardSVG } from '../../lib/svg-generator';
import { LAYOUTS, LayoutId } from '../../lib/keyboard-layout';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const params = request.nextUrl.searchParams;
  const keysParam = params.get('keys') ?? '';
  const layoutParam = params.get('layout') ?? 'mba-jis';
  const layoutId: LayoutId = (layoutParam in LAYOUTS) ? layoutParam as LayoutId : 'mba-jis';
  const layout = LAYOUTS[layoutId];
  const fnHeld = params.get('fn') === '1' || keysParam.toLowerCase().split(',').map(s => s.trim()).includes('fn');

  const highlighted = parseKeys(keysParam, layout.vimMap, layout.modifierMap);
  if (fnHeld) highlighted.add('key_fn');

  const svg = generateKeyboardSVG(highlighted, layoutId, fnHeld);
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
