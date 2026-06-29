// Packages each project under public/projects/<slug> into a downloadable zip in
// public/downloads, plus an all-projects.zip. Runs automatically before build.
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, rmSync, existsSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const projectsDir = join(root, 'public', 'projects')
const downloadsDir = join(root, 'public', 'downloads')

if (!existsSync(projectsDir)) {
  console.log('[zip-projects] no public/projects directory, skipping')
  process.exit(0)
}

rmSync(downloadsDir, { recursive: true, force: true })
mkdirSync(downloadsDir, { recursive: true })

const slugs = readdirSync(projectsDir).filter((name) =>
  statSync(join(projectsDir, name)).isDirectory(),
)

for (const slug of slugs) {
  const out = join(downloadsDir, `${slug}.zip`)
  // Zip the project folder itself so the archive extracts into a named directory.
  execFileSync('zip', ['-r', '-q', out, slug], { cwd: projectsDir })
  console.log(`[zip-projects] packaged ${slug}.zip`)
}

// Bundle every project into a single archive.
execFileSync('zip', ['-r', '-q', join(downloadsDir, 'all-projects.zip'), ...slugs], {
  cwd: projectsDir,
})
console.log(`[zip-projects] packaged all-projects.zip (${slugs.length} projects)`)
