import 'react-quill/dist/quill.snow.css'; // Quill 기본 테마 CSS
import { EditorWrapper, StyledReactQuill } from './TextEditor.styles';

interface TextEditorProps {
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 에디터의 현재 내용 */
  value: string;
  /** 에디터 내용 변경 시 호출되는 함수 */
  onChange: (value: string) => void;
}

// react-quill의 기본 모듈 설정
const modules = {
  /* toolbar 순서대로 버튼 나열 */
  toolbar: [
    [{ header: '1' }, { header: '2' }], // 글자크기 설정 (헤더)
    ['bold', 'italic', 'underline', 'strike'], // 굵게, 기울임, 밑줄, 취소선
    [{ list: 'ordered' }, { list: 'bullet' }], // 순서있는 리스트, 순서없는 리스트
    [{ color: [] }, { background: [] }], // 글자색, 배경색 설정
    [{ align: [] }], // 텍스트 정렬
    ['link', 'image', 'video'], // 링크, 이미지, 비디오 추가
    ['clean'], // 적용된 서식 초기화
  ],
  clipboard: {
    matchVisual: false, // 클립보드에서 붙여넣기 시 서식 없이 붙여넣기
  },
};

const TextEditor: React.FC<TextEditorProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const handleContentChange = (content: string) => {
    onChange(content);
  };

  return (
    <EditorWrapper>
      <StyledReactQuill
        value={value} // 부모 컴포넌트로부터 전달받은 value를 에디터 내용으로 사용
        onChange={handleContentChange} // 에디터 변경 이벤트 핸들러 설정
        theme="snow"
        placeholder={placeholder || '소개글을 작성해주세요!'}
        modules={modules} // 에디터 모듈 설정 (툴바, 클립보드 등)
      />
    </EditorWrapper>
  );
};

export default TextEditor;
