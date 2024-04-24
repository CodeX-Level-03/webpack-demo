'use strict';
import _ from 'lodash';
const content= document.getElementById('content').innerText;

const newText = _.camelCase(content);

document.getElementById('content').innerText = (newText);
