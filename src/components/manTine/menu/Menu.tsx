import { Menu as MenuMantine, MenuProps} from '@mantine/core';
import {FC} from "react";

export const Menu: FC<MenuProps> = ({ children, ...props }) => {
    return (
        <MenuMantine {...props} shadow="md" width={200}>
            {children}
        </MenuMantine>
    );
}