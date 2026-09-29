#!/usr/bin/env node
/**
 * Prints a random `draftId` to paste into an article's frontmatter.
 *
 * A draft's web address ends in this string 
 */

import { randomInt } from 'node:crypto';

// No vowels, so a generated id cannot accidentally spell something.
const ALPHABET = 'bcdfghjkmnpqrstvwxz23456789';
const LENGTH = 10;

let id = '';
for (let i = 0; i < LENGTH; i++) id += ALPHABET[randomInt(ALPHABET.length)];

console.log(id);
