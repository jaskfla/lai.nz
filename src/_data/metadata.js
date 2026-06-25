import { execSync } from 'node:child_process';

export default {
	name: 'Jasper Lai',
	domain: 'lai.nz',
	email: '&#106;&#64;&#108;&#97;&#105;&#46;&#110;&#122;',
	description:
		'Has annoying opinions about fonts. (Also: making healthcare software at Beyond Essential Systems.',
	repoUrl: 'https://github.com/jaskfla/lai.nz',
	/** @see https://stackoverflow.com/a/34518749/5323344 */
	commitHash: execSync('git rev-parse HEAD').toString().trim(),
	commitHashShort: execSync('git rev-parse --short HEAD').toString().trim(),
};
