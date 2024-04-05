// 幅0のフォント
import AdobeBlank from "./fonts/AdobeBlank.otf.woff";

/**
 * フォントが利用可能かどうかを検出する
 * @param fontName
 */
export const isAvailableThisFont = async (fontName: string) => {
  const canvas = document.createElement("canvas");
  const context = canvas?.getContext("2d");
  if (!context) {
    return;
  }

  // フォントの読み込み
  const zeroFont = new FontFace(
    "widthZeroFont",
    `url(${AdobeBlank}) format("woff")`,
    { weight: "400", style: "normal" }
  );
  document.fonts.add(zeroFont);
  await zeroFont.load();
  // フォントを指定して描画
  context.font = `16px ${fontName}, widthZeroFont`;
  context.fillText("A", 0, 16);
  const textMetrics = context.measureText("A");
  // 幅が0の場合はフォントが利用できない
  if (textMetrics.width === 0) {
    return false;
  } else {
    return true;
  }
};
