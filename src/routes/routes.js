import Layout from 'layout';
import PublicLayout from 'layout/Public';
import PrivateLayout from 'layout/Private';
import Page403 from 'pages/403';
import Page404 from 'pages/404';
import Home from 'pages/Home';
import Project from 'pages/Project';
import ProjectItem from 'pages/Project/ProjectItem';
import Contact from 'pages/Contact';

const routes = [
    {
        path: '403',
        element: <Page403 />,
    },
    {
        path: '404',
        element: <Page404 />,
    },
    {
        element: <Layout />,
        children: [
            {
                element: <PublicLayout />,
                children: [
                    {
                        path: '/',
                        index: true,
                        element: <Home />,
                    },

                    {
                        path: 'contact',
                        element: <Contact />,
                    },
                ]
            },
            {
                element: <PrivateLayout />,
                children: [
                    {
                        path: 'project',
                        element: <Project />,
                        children: [
                            {
                                path: ':projectId',
                                element: <ProjectItem />,
                            },
                        ]
                    },
                ]
            }
            
        ],
    }
];

export default routes;