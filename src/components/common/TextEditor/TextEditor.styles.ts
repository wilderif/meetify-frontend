import styled from "styled-components";
import ReactQuill from "react-quill";

export const EditorWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
`;

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    background-color: var(--color-gray-white);
    border-radius: 8px 8px 0 0;
  }

  .ql-container {
    border-radius: 0 0 8px 8px;
    font-size: var(--font-size-body-medium);
    min-height: 500px;
  }

  .ql-editor {
    padding: 16px;
    line-height: 1.6;
    font-weight: var(--font-weight-regular);

    /* index.css 때문에 해당 요소 스타일이 초기화되어서 다시 지정! */
    b,
    strong {
      font-weight: var(--font-weight-bold);
    }
    i,
    em {
      font-style: italic;
    }
  }

  .ql-placeholder {
    color: var(--bg-gray-light);
  }
`;
