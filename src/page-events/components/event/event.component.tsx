import React from 'react';
import styled from 'styled-components';
import { Add, Remove } from 'styled-icons/material';

import { Event } from '../../models/event.model';

const Wrapper = styled.div`    
    border-bottom: 1px solid #f2f2f2;
    cursor: ${(props: { hasDescription: boolean }) => props.hasDescription ? 'pointer': 'normal' }
        
    &:last-child {
        border: none;
    }
`;

const Header = styled.div`
    display: flex;
    padding: 10px;
`;

const Date = styled.div`
    font-weight: 700;
    margin-right: 10px;
`;

const Title = styled.div``;

const Toggle = styled.div`
    width: 20px;
    margin-left: auto;
`;

const AddIcon = styled(Add)``;
const RemoveIcon = styled(Remove)``;

const Description = styled.div`
    display: ${(props: { isOpen: boolean }) => props.isOpen ? 'block' : 'none' };
    padding: 0 10px 10px;
`;

interface Props {
    event: Event;
}

interface State {
    isOpen: boolean;
}

export class PageEventsEvent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleDescription() {
        if (!this.props.event.description) {
            return;
        }

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Wrapper
                hasDescription={!!this.props.event.description}
                onClick={() => this.toggleDescription()}>
                <Header>
                    <Date>
                        {this.props.event.date.toLocaleDateString()}
                    </Date>
                    <Title>
                        {this.props.event.name}
                    </Title>
                    {this.props.event.description &&
                        <Toggle>
                            {this.state.isOpen ? <RemoveIcon /> : <AddIcon />}
                        </Toggle>
                    }
                </Header>
                {this.props.event.description &&
                    <Description isOpen={this.state.isOpen}>
                        {this.props.event.description}
                    </Description>
                }
            </Wrapper>
        );
    }
}
