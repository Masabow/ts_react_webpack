import * as React from 'react';

import Item from './Item';

import Add from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export interface Props {
  ids: number[];
}

export interface States {
  ids: number[];
}

export default class Compartment extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = props;
  }

  public render() {
    return (
      <div>
        <Grid container spacing={24}>
          {this.state.ids.map((id) => {
            return <Item id={id} onDelete={this.onDelete} key={id} />
          })}
        </Grid>
        {/* floating action button */}
        <Button variant="fab" color="primary" aria-label="Add" onClick={this.onAdd}>
          <Add />
        </Button>
      </div>
    );
  }

  private onDelete = (id: number) => {
    this.setState({ ids: this.state.ids.filter((t) => t !== id) });
  }

  private onAdd = (e:any) => {
    const temp = this.state.ids;
    temp.push(temp.length);
    this.setState({ ids: temp });
  }
}