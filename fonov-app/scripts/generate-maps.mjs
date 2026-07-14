#!/usr/bin/env node
/**
 * Generates maps.json from image assets directory.
 * Run after adding PNG instruction images to src/assets/img/
 */
import { writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const IMG_DIR = new URL('../src/assets/img', import.meta.url).pathname;
const IGNORE = new Set(['maps.json', 'default.svg', '_maps.js', '_refactor.js', '_ls_maps.js', '_rename_img.js']);

function walk(dir, base = '') {
  const result = {};
  for (const entry of readdirSync(dir)) {
    if (IGNORE.has(entry)) continue;
    const full = join(dir, entry);
    const rel = base ? `${base}/${entry}` : entry;
    if (statSync(full).isDirectory()) {
      result[entry.toLowerCase()] = walk(full, rel);
    } else {
      const name = entry.replace(/\.[^.]+$/, '');
      result[name] = { src: rel, width: 365, height: 710 };
    }
  }
  return result;
}

const maps = walk(IMG_DIR);
writeFileSync(join(IMG_DIR, 'maps.json'), JSON.stringify(maps, null, 2));
console.log('Generated maps.json with', Object.keys(maps).length, 'test entries');
