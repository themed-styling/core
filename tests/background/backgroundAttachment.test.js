import { backgroundAttachment } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

backgroundAttachment.name_ = 'backgroundAttachment'
testStringValuesOn(
  backgroundAttachment,
  'background-attachment:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  backgroundAttachment,
  'background-attachment:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  backgroundAttachment,
  'background-attachment:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(backgroundAttachment)
