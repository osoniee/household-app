type ICategory = {
    key: string | null;
    path: string | null;
    children: (CategoryGroup | CategoryMember)[];
    categoryType: 'Root' | 'Group' | 'Member';
}

export type CategoryRoot = ICategory & {
    id: string;
    key: null;
    path: null;
    categoryType: 'Root';
}

export type CategoryGroup = ICategory & {
    categoryType: 'Group';
    description: string;
    key: string;
    path: string;
}

export type CategoryMember = ICategory & {
    categoryType: 'Member';
    description: string;
    key: string;
    path: string;
}
