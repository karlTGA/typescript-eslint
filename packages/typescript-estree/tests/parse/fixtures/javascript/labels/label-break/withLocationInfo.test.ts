import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/labels/label-break.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);