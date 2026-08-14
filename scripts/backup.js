// scripts/backup.js
const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const backupDir = path.join(__dirname, '../backups')
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
const backupFile = path.join(backupDir, `backup-${timestamp}.json`)

const data = {
  timestamp: new Date().toISOString(),
  tables: ['courses', 'chapters', 'topics', 'users', 'enrollments'],
  message: 'Backup created (dummy)'
}

fs.writeFileSync(backupFile, JSON.stringify(data, null, 2))
console.log(`✅ Backup created: ${backupFile}`)
