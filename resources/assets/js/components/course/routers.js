import Course from './Course.vue'
import PageExam from './PageExam.vue'
import PageStudent from './PageMyStudent.vue'
import Discussions from './PageDiscussion.vue'
import CourseSingle from './CourseSingle.vue'
import CourseDetails from './CourseDetails.vue'
import CourseLessons from './CourseLessons.vue'
export default [{
    path: '/instructor/courses',
    redirect: { name: 'course' },
    component: {
        render (c) {
            return c('router-view')
        }
    },
    children: [{
        path: '/',
        name: 'course',
        component: Course
    },

    {
        path: 'exam',
        name: 'exam',
        component: PageExam
    },
    {
        path: 'my-students',
        name: 'my-students',
        component: PageStudent
    },
    {
        path: 'discussion',
        name: 'discussion',
        component: Discussions
    },
    {
        path: ':course',
        name: 'course-single',
        redirect: { name: 'coures-details' },
        component: CourseSingle,
        children: [{
            path: '/',
            name: 'coures-details',
            component: CourseDetails
        },
        {
            path: 'lessons',
            name: 'coures-lessons',
            component: CourseLessons
        }
        ]
    }
    ]
}]
