import universal from '../../src/lib/util/universal'

test('constructs array', () => {
  expect(
    universal(123, {}, 'test-property:test(', ');', (value) => value)
  ).toStrictEqual(['test-property:test(', 123, ');'])
  expect(
    universal('asdasd', {}, 'test-property:test(', ');', (value) => value)
  ).toStrictEqual(['test-property:test(', 'asdasd', ');'])
})

test('constructs array with breakpoints', () => {
  expect(
    universal(
      {
        standard: 12,
        custom: 22,
        mobile: '34px',
        tablet: '41',
        desktop: 55,
        wide: '67rem',
      },
      {
        breakpoints: {
          custom: '200px',
          mobile: '320px',
          tablet: '768px',
          desktop: '1024px',
          wide: '1440px',
        },
      },
      'test-property:test(',
      ');',
      (value) => value
    )
  ).toStrictEqual([
    ['test-property:test(', 12, ');'],
    [
      ['@media screen and (min-width:', '200px', ')'],
      '{',
      'test-property:test(',
      22,
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '320px', ')'],
      '{',
      'test-property:test(',
      '34px',
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '768px', ')'],
      '{',
      'test-property:test(',
      '41',
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1024px', ')'],
      '{',
      'test-property:test(',
      55,
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1440px', ')'],
      '{',
      'test-property:test(',
      '67rem',
      ');',
      '}',
    ],
  ])
  expect(
    universal(
      ['22rem', 34, 41, '55px', '67ch'],
      {
        breakpoints: ['200px', '320px', '768px', '1024px', '1440px'],
      },
      'test-property:test(',
      ');',
      (value) => value
    )
  ).toStrictEqual([
    false,
    [
      ['@media screen and (min-width:', '200px', ')'],
      '{',
      'test-property:test(',
      '22rem',
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '320px', ')'],
      '{',
      'test-property:test(',
      34,
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '768px', ')'],
      '{',
      'test-property:test(',
      41,
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1024px', ')'],
      '{',
      'test-property:test(',
      '55px',
      ');',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1440px', ')'],
      '{',
      'test-property:test(',
      '67ch',
      ');',
      '}',
    ],
  ])
})

test('constructs array with mediaQueries', () => {
  expect(
    universal(
      {
        standard: 11,
        custom: '25px',
        mobile: 39,
        tablet: '44ch',
        desktop: '51rem',
        wide: 64,
      },
      {
        mediaQueries: {
          custom: '@test and custom',
          mobile: '@test and mobile',
          tablet: '@test and tablet',
          desktop: '@test and desktop',
          wide: '@test and wide',
        },
      },
      'test-property:test(',
      ');',
      (value) => value
    )
  ).toStrictEqual([
    ['test-property:test(', 11, ');'],
    ['@test and custom', '{', 'test-property:test(', '25px', ');', '}'],
    ['@test and mobile', '{', 'test-property:test(', 39, ');', '}'],
    ['@test and tablet', '{', 'test-property:test(', '44ch', ');', '}'],
    ['@test and desktop', '{', 'test-property:test(', '51rem', ');', '}'],
    ['@test and wide', '{', 'test-property:test(', 64, ');', '}'],
  ])
  expect(
    universal(
      ['24px', 31, '43ch', 52, '62rem'],
      {
        mediaQueries: [
          '@test and 0',
          '@test and 1',
          '@test and 2',
          '@test and 3',
          '@test and 4',
        ],
      },
      'test-property:test(',
      ');',
      (value) => value
    )
  ).toStrictEqual([
    false,
    ['@test and 0', '{', 'test-property:test(', '24px', ');', '}'],
    ['@test and 1', '{', 'test-property:test(', 31, ');', '}'],
    ['@test and 2', '{', 'test-property:test(', '43ch', ');', '}'],
    ['@test and 3', '{', 'test-property:test(', 52, ');', '}'],
    ['@test and 4', '{', 'test-property:test(', '62rem', ');', '}'],
  ])
})
