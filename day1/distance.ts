const text: string = await Deno.readTextFile("input.txt")
const numbers: number[] = text.trim().split(/[\s\n]+/).map(Number)

const first: number[] = numbers.filter((_, i) => i % 2 === 0).sort()
const second: number[] = numbers.filter((_, i) => i % 2 === 1).sort()

// Part 1
const result: number = first.reduce((s, num, i): number => s + Math.abs(num - second[i]), 0)

console.log(result)

// Part 2
const counts: { [key: number]: number } = second.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
}, {})

const similarity: number = first.reduce((s, num): number => {
  s += num * (counts[num] || 0)
  return s
}, 0)

console.log(similarity)