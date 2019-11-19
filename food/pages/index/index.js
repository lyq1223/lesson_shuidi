

Page({
  data: {
    entities: [
      {
        imageUrl: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
        title: 'A',
        description: 'AA'
      },
      {
        imageUrl: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=ad628627aacc7cd9e52d32d909032104/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
        title: 'A',
        description: 'AA'
      },
      {
        imageUrl: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=ad628627aacc7cd9e52d32d909032104/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
        title: 'A',
        description: 'AA'
      },
      {
        imageUrl: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=ad628627aacc7cd9e52d32d909032104/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg',
        title: 'C',
        description: 'cc'
      }
    ]
  },
  onLoad() {
    console.log('onload');
  },
  onReachBottom() {
    // console.log('触底了');
    const data = [...this.data.entities, ...this.data.entities];
    this.setData({
      entities: data
    })
  }
})

