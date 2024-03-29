#!/usr/bin/env node
console.log(Object.entries(require('os').networkInterfaces())
    .map(([_, nics]) => nics).flat()
    .filter(nic => !nic?.internal && nic?.family === 'IPv4')
    .map(nic => nic?.address ?? '')
    .filter(ip => !ip.startsWith('169.254.'))
    .slice(0, 1).join(''));