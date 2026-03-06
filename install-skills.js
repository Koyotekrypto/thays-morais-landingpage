const { spawn } = require('child_process');

function installSkill(skill) {
    return new Promise((resolve, reject) => {
        console.log(`\n=======================================\nInstalling ${skill}...\n=======================================`);
        const proc = spawn('npx', ['skills', 'add', 'google-labs-code/stitch-skills', '--skill', skill, '--global'], { shell: true });

        proc.stdout.on('data', (data) => {
            const out = data.toString();
            process.stdout.write(out);

            // Auto-respond to known prompts
            if (out.includes('Ok to proceed? (y)')) {
                proc.stdin.write('y\n');
            }
            if (out.includes('Which agents do you want to install to?')) {
                proc.stdin.write('\n');
            }
            if (out.includes('Installation method')) {
                proc.stdin.write('\n');
            }
            if (out.includes('Proceed with installation')) {
                proc.stdin.write('\n');
            }
        });

        proc.stderr.on('data', (data) => {
            process.stderr.write(data.toString());
        });

        proc.on('close', (code) => {
            if (code === 0) {
                console.log(`✔ Successfully installed ${skill}.`);
                resolve();
            } else {
                console.error(`✖ Failed to install ${skill} with exit code ${code}.`);
                reject(new Error(`Failed with code ${code}`));
            }
        });
    });
}

async function run() {
    const skills = [
        'react:components',
        'stitch-loop',
        'enhance-prompt',
        'remotion',
        'shadcn-ui'
    ];
    try {
        for (const skill of skills) {
            await installSkill(skill);
        }
        console.log('\nAll skills installed successfully!');
    } catch (err) {
        console.error('Installation aborted due to error.', err);
        process.exit(1);
    }
}

run();
