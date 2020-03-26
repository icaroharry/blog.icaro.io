import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            <Title>
              <span style={{ color: "#d785c0" }}>import</span>{" "}
              <span style={{ color: "#fff" }}>{"{"}</span>{" "}
              <span style={{ color: "#fbd38d" }}>blog</span>{" "}
              <span style={{ color: "#fff" }}>{"}"}</span>
              <span style={{ color: "#d785c0" }}> from</span>{" "}
              <span>"icaro.io"</span>
            </Title>
          </Link>
        </h1>
      );
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #303030;
  color: #fff;

  h1,
  a {
    color: #85d79c;
  }

  p {
    a {
      color: #d785c0;
    }

    a:visited {
      color: #c550a4;
    }

    a:hover {
      color: #ce6ab2;
    }
  }
`;

const Title = styled.title`
  display: block;
  font-size: 32px;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
