import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/MainPage/MainPage";
import ChatsPage from "./pages/ChatsPage/ChatsPage";
import MyInfoPage from "./pages/MyInfoPage/MyInfoPage";
import MyInfoEditPage from "./pages/MyInfoPage/MyInfoEditPage";
import MyLikePage from "./pages/MyLikePage/MyLikePage";
import MyPostPage from "./pages/MyPostPage/MyPostPage";
import PostPage from "./pages/PostPage/PostPage";
import CreateLayout from "./pages/PostCreatePage/CreateLayout";
import CreateMeetPage from "./pages/PostCreatePage/CreateMeetPage";
import CreateProjectPage from "./pages/PostCreatePage/CreateProjectPage";
import CreateStudyPage from "./pages/PostCreatePage/CreateStudyPage";
import UpdateLayout from "./pages/PostUpdatePage/UpdateLayout";
import UpdateMeetPage from "./pages/PostUpdatePage/UpdateMeetPage";
import UpdateProjectPage from "./pages/PostUpdatePage/UpdateProjectPage";
import UpdateStudyPage from "./pages/PostUpdatePage/UpdateStudyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"; // 에러 페이지

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // 에러 페이지 설정
    children: [
      { index: true, element: <MainPage /> }, // 메인 페이지

      // 마이페이지 및 수정 페이지
      {
        path: "my-info",
        element: <MyInfoPage />,
        children: [
          { path: "edit", element: <MyInfoEditPage /> }, // 마이페이지 수정
        ],
      },

      // 관심글 페이지
      {
        path: "my-like",
        element: <MyLikePage />,
      },

      // 작성글 페이지
      {
        path: "my-post",
        element: <MyPostPage />,
      },

      // 포스트 관련 라우트
      {
        path: "post",
        element: <PostPage />,
      },

      // 포스트 작성 관련 라우트
      {
        path: "post/create",
        element: <CreateLayout />,
        children: [
          { path: "project", element: <CreateProjectPage /> },
          { path: "study", element: <CreateStudyPage /> },
          { path: "meet", element: <CreateMeetPage /> },
        ],
      },

      // 포스트 업데이트 관련 라우트
      {
        path: "post/update",
        element: <UpdateLayout />,
        children: [
          { path: "meet", element: <UpdateMeetPage /> },
          { path: "project", element: <UpdateProjectPage /> },
          { path: "study", element: <UpdateStudyPage /> },
        ],
      },

      // 채팅 페이지
      {
        path: "chat",
        element: <ChatsPage />,
      },
    ],
  },
]);

export default routes;
