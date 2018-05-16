import React, { Component } from 'react'
import format from 'date-fns/format'
import { Card, CardHeader, CardMedia } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

const styles = {
  cardHeader: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  cardTitle: {
    textAlign: 'left'
  }
}

class ImageGrid extends Component {
  render() {
    const {
      imageObjects = [],
      size = 'fixed_height_small'
    } = this.props

    return (
      <React.Fragment>
        {
          imageObjects.map((imgObj, key) => (
            <Card className="image-card" key={key}>
              <CardHeader
                avatar={
                  <Avatar>
                    {imgObj.post.user.name[0].toUpperCase()}
                  </Avatar>
                }
                title={imgObj.post.user.name}
                subtitle={format(new Date(imgObj.post.posted), 'MMM Do')}
                subtitleStyle={styles.cardTitle}
                titleStyle={styles.cardTitle}
                style={styles.cardHeader}
              />
              <CardMedia>
                <img
                  src={imgObj.images[size].url} key={key}
                  alt={imgObj.title}
                />
              </CardMedia>
            </Card>

          ))
        }
      </React.Fragment>
    )
  }
}

export default ImageGrid
