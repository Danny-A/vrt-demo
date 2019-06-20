export default function resolveSite(virtualPath) {
  const sitesMap = new Map();
  sitesMap.set('nl', { name: 'weareyou', language: 'nl-NL' });
  sitesMap.set('en', { name: 'weareyou_en', language: 'en' });
  sitesMap.set('unknown', { name: 'unknown', language: 'unknown' });
  return sitesMap.get(virtualPath) || sitesMap.get('unknown');
}
