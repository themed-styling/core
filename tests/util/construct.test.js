import construct from '../../src/lib/util/construct'

test('constructs array', () => {
  expect(construct(123, {}, 'test-property', (value) => value)).toStrictEqual([
    ['test-property', ':'],
    123,
    ';',
  ])
  expect(
    construct('asdasd', {}, 'test-property', (value) => value)
  ).toStrictEqual([['test-property', ':'], 'asdasd', ';'])
})

test('constructs array with breakpoints', () => {
  expect(
    construct(
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
      'test-property',
      (value) => value
    )
  ).toStrictEqual([
    [['test-property', ':'], 12, ';'],
    [
      ['@media screen and (min-width:', '200px', ')'],
      '{',
      ['test-property', ':'],
      22,
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '320px', ')'],
      '{',
      ['test-property', ':'],
      '34px',
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '768px', ')'],
      '{',
      ['test-property', ':'],
      '41',
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1024px', ')'],
      '{',
      ['test-property', ':'],
      55,
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1440px', ')'],
      '{',
      ['test-property', ':'],
      '67rem',
      ';',
      '}',
    ],
  ])
  expect(
    construct(
      ['22rem', 34, 41, '55px', '67ch'],
      {
        breakpoints: ['200px', '320px', '768px', '1024px', '1440px'],
      },
      'test-property',
      (value) => value
    )
  ).toStrictEqual([
    false,
    [
      ['@media screen and (min-width:', '200px', ')'],
      '{',
      ['test-property', ':'],
      '22rem',
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '320px', ')'],
      '{',
      ['test-property', ':'],
      34,
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '768px', ')'],
      '{',
      ['test-property', ':'],
      41,
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1024px', ')'],
      '{',
      ['test-property', ':'],
      '55px',
      ';',
      '}',
    ],
    [
      ['@media screen and (min-width:', '1440px', ')'],
      '{',
      ['test-property', ':'],
      '67ch',
      ';',
      '}',
    ],
  ])
})

test('constructs array with mediaQueries', () => {
  expect(
    construct(
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
      'test-property',
      (value) => value
    )
  ).toStrictEqual([
    [['test-property', ':'], 11, ';'],
    ['@test and custom', '{', ['test-property', ':'], '25px', ';', '}'],
    ['@test and mobile', '{', ['test-property', ':'], 39, ';', '}'],
    ['@test and tablet', '{', ['test-property', ':'], '44ch', ';', '}'],
    ['@test and desktop', '{', ['test-property', ':'], '51rem', ';', '}'],
    ['@test and wide', '{', ['test-property', ':'], 64, ';', '}'],
  ])
  expect(
    construct(
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
      'test-property',
      (value) => value
    )
  ).toStrictEqual([
    false,
    ['@test and 0', '{', ['test-property', ':'], '24px', ';', '}'],
    ['@test and 1', '{', ['test-property', ':'], 31, ';', '}'],
    ['@test and 2', '{', ['test-property', ':'], '43ch', ';', '}'],
    ['@test and 3', '{', ['test-property', ':'], 52, ';', '}'],
    ['@test and 4', '{', ['test-property', ':'], '62rem', ';', '}'],
  ])
})
