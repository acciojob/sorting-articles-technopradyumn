//your JS code here. If required.

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

const strip = title => title.replace(/^(a |an |the )/i, '');

bands.sort((a, b) => strip(a).localeCompare(strip(b)));

document.getElementById('band').innerHTML =
  bands.map(band => `<li>${band}</li>`).join('');
