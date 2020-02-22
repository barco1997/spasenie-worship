import React, { useRef, useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  /** style here*/
`;

const withSpaRouter = (Component, route) => {
  const SpaComponent = props => {
    const initialState = {
      selected: false,
      scroll: true
    };

    const [selected, setSelected] = useState(initialState.selected);
    const [scroll, setScroll] = useState(initialState.scroll);
    const wrapper = useRef();
    const trackScrolling = () => {
      if (
        wrapper.current.getBoundingClientRect().top <=
          0.5 * window.innerHeight &&
        wrapper.current.getBoundingClientRect().bottom >=
          0.5 * window.innerHeight
      ) {
        if (scroll) {
          setScroll(false);
        }
        if (!selected) {
          setSelected(true);
          props.history.push(route);
        }
      } else {
        if (selected) {
          setSelected(false);
        }
        if (!scroll) {
          setScroll(true);
        }
      }
    };
    useEffect(() => {
      if (props.match.params.view === route.slice(1)) {
        if (scroll) {
          wrapper.current.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    }, [props.match.params.view]);

    useEffect(() => {
      document.addEventListener("scroll", trackScrolling);
      return () => {
        document.removeEventListener("scroll", trackScrolling);
      };
    });

    return (
      <Wrapper ref={wrapper}>
        <Component {...props} />
      </Wrapper>
    );
  };
  return withRouter(SpaComponent);
};

export default withSpaRouter;
