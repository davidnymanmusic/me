export const blue = '#1a4661';
export const green = '#0c3a39';
export const white = '#edf5e1';
export const dark = '#272d2e';
export const light = '#94b2b3';
export const peach = '#f7d79c';

export function isMobile() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}
