import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, media, rtl, rem } from '@cdl/foundations';

const activeClassName = 'active';

const ContainerWrapper = styled.div`
    background: ${colors.DARK_SLATE};
    width: 1280px;
    position: relative;
    left: -50px;
`;

const Container = styled.nav`
  max-width: ${rem('1600px')};
  margin: 0 auto;

  ul {
    margin: 0 ${rem('10px')};
    padding: 0;
    display: flex;
  }

  li {
    margin-right: ${rem('2px')};

    &:last-child {
      margin-right: 0;
    }
  }

  ${rtl`
    li {
      margin-right: 0;
      margin-left: ${rem('2px')};
    }
  `}

  a {
    display: block;
    padding: ${rem('13px')} ${rem('20px')};
    transition: padding 400ms ease, box-shadow 400ms ease;
    will-change: padding, box-shadow;
    line-height: 1;
    font-size: ${rem('14px')};
    background: ${colors.LIGHT_SLATE};
    color: ${colors.WHITE};
    font-weight: 500;
    text-decoration: none;
    font-family:HSBC-Universe-Medium;



    &.active,
    &.active:hover {
      background: ${colors.WHITE};
      color: ${colors.BLACK};
      box-shadow: inset 0 3px 0 0 ${colors.RED};
    }

    &:hover {
      background: ${colors.LIGHT_SLATE_TINT};
    }

  }
`;

const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  &.${activeClassName} {
    color: #fff;
  }
`;

export default function Tab({tabs}) {
    
    return (
        <ContainerWrapper>
            <div>
                <Container>
                {tabs &&
                    <ul>
                    { tabs.map((item, index) => (
                        <li key={index}>
                        <StyledLink to={item.url} exact activeClassName="active">{item.title}</StyledLink>
                        </li>
                    ))}
                    </ul>
                }
                </Container>
            </div>
        </ContainerWrapper>
    );

}