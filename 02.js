const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema)

const course = new Course({
    name: 'node.js基础',
    author: '黑马讲师',
    isPublished: true
});
course.save();