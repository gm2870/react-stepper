import { Addon } from './models/addon.model';
import { Plan } from './models/plan.model';

export const plans: Plan[] = [
  {
    id: '_1',
    price: 9,
    icon: 'arcade',
    title: 'Arcade',
    type: 'MONTHLY',
  },
  {
    id: '_2',
    price: 12,
    icon: 'advanced',
    title: 'Advanced',
    type: 'MONTHLY',
  },
  {
    id: '_3',
    price: 19,
    icon: 'pro',
    title: 'Pro',
    type: 'MONTHLY',
  },
];
export const addons: Addon[] = [
  {
    id: '_1',
    price: 9,
    title: 'Online Service',
    description: 'Access to muktiplayer games',
    type: 'MONTHLY',
  },
  {
    id: '_2',
    price: 12,
    title: 'Online Service',
    description: 'Access to multiplayer games',
    type: 'MONTHLY',
  },
  {
    id: '_3',
    price: 15,
    title: 'Online Service',
    description: 'Access to multiplayer games',
    type: 'MONTHLY',
  },
];
