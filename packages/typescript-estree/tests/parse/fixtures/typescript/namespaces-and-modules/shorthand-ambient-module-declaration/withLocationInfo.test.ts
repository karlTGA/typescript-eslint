import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/namespaces-and-modules/shorthand-ambient-module-declaration.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);