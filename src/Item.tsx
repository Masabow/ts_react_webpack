import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';

export interface Prop {
  id: number
  onDelete?: (id: number) => void
};

export interface State {
  name: string
  volume: number
  last: Date
};

class Item extends React.Component<Prop, State> {
  constructor(prop: Prop, state: State) {
    super(prop);
    this.state = {
      name: 'みかん',
      volume: 100.0,
      last: new Date()
    }
  }

  public render() {
    return (
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Button onClick={this.onDelete} >Delete</Button>
            <TextField
              id="standard-name"
              label="Name"
              className="name"
              value={this.state.name}
              onChange={this.onChangeName}
              margin="normal"
            />
            <Slider value={this.state.volume} onChange={this.onChangeVolume} />
          </CardContent>
        </Card>
      </Grid>
    );
  }

  // thisを束縛するよう、アロー関数で定義
  private onChangeName = (e: any) => {
    this.setState({ name: e.target.value });
  }

  private onChangeVolume = (e: any, value: any) => {
    this.setState({ volume: value });
  }

  private onDelete = () => {
    if(this.props.onDelete) {
      this.props.onDelete(this.props.id);
    }
  }
}

export default Item;