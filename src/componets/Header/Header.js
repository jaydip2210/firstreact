import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const cart = useSelector(state => state.cart)

    const cartCount = cart.cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(cartCount);

    return (
        <div className="container">
            {/* <Header> */}
            {/* <nav>
                <ul>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink to="/dummyproduct">DummyProduct</NavLink></li>
                    <li><NavLink>Counter</NavLink></li>
                    <li><NavLink>Medicine</NavLink></li>


                    <Link to="/cart">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartCount} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </ul>
            </nav> */}
            {/* </Header> */}

            <nav>
                <ul>
                    <li><NavLink to={"/product"}>Product</NavLink></li>
                    <li><NavLink to={"/header"}>Header</NavLink></li>
                    <li><NavLink>Counter</NavLink></li>
                    <li><NavLink>Medicine</NavLink></li>


                    <Link to={"/cart"}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartCount} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </ul>
            </nav>

        </div >
    );
}

export default Header;