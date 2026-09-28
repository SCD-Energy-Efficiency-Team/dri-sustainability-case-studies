/**
 *
 * Roles are a closed set: adding a new one is made by
 * editing this file in the same pull request. Tags are open, but must be
 * lowercase-kebab-case (enforced in src/content.config.ts) so that `CUDA`,
 * `cuda` and `Cuda` don't fragment into three tag pages etc..
 */

export const ROLES = {
  'software-engineer': {
    label: 'Software engineer',
    description: 'Research software engineers and developers writing research code.',
  },
  'hpc-facilitator': {
    label: 'HPC facilitator',
    description: 'People who run, support or advise on high-performance computing facilities.',
  },
  'data-scientist': {
    label: 'Data scientist',
    description: 'Analysts and scientists using software, running pipelines etc.',
  },
  'project-manager': {
    label: 'Project manager',
    description: 'People planning, costing and reporting on research projects.',
  },
  'compute-user': {
    label: 'Compute user',
    description: 'More general than data-scientist. Anyone using a computer heavily in their work',
  },
  'devops-engineer': {
    label: 'DevOps engineer',
    description: 'People running CI, cloud estates, containers and deployment pipelines.',
  },
  'security-engineer': {
    label: 'Security engineer',
    description: 'People securing research infrastructure and data.',
  },
} as const;

export type Role = keyof typeof ROLES;
export const ROLE_IDS = Object.keys(ROLES) as [Role, ...Role[]];

export const roleLabel = (id: string) => ROLES[id as Role]?.label ?? id;
