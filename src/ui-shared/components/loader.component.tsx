import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Loader: FunctionComponent = () => {
    return (
        <LoaderWrapper>
            <CircularProgress />
        </LoaderWrapper>
    );
};

