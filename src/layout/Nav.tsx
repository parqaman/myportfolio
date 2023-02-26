export const Nav = (props: React.HTMLAttributes<HTMLUListElement>) => {
    return <ul {...props} className="flex justify-center"/>;
};

export const NavItem = (props: React.HTMLAttributes<HTMLLIElement>) => {
    return <li {...props} className="list-none p-0.5 m-0.5" />;
};