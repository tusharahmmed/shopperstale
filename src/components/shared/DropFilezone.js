import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

const DropFilezone = ({
  fileState,
  setFileState,
  acceptedFiles,
  maxNumber,
}) => {
  const [uploadError, setUploadError] = useState("");

  // handle img drop
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    // clear state
    setFileState("");
    setUploadError("");

    // if have validate file
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        setFileState(reader.result);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }

    // if have rejected file
    if (rejectFiles.length > 0) {
      // console.log('have error')
      let errorMessage = rejectFiles[0].errors[0].message;
      setUploadError(errorMessage);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFiles,
    maxFiles: maxNumber,
    onDrop,
  });
  return (
    <Container>
      <Wraper {...getRootProps()}>
        <InnerWraper role="button" tabIndex="0">
          <input
            type="file"
            autoComplete="off"
            tabIndex="-1"
            name="profile.avatar"
            style={{ display: "none" }}
            {...getInputProps()}
          />

          <Icon fileState={fileState}>
            <AiOutlineCloudUpload size={30} />
          </Icon>

          <p>
            <span>Upload an image</span> or drag and drop <br />
            <span>PNG, JPG</span>
          </p>
        </InnerWraper>
      </Wraper>
      <aside>
        <p>{uploadError}</p>
        {fileState ? <img src={fileState} alt="" /> : null}
      </aside>
    </Container>
  );
};

export default DropFilezone;

const Container = styled.section`
  aside {
    p {
      color: red;
    }
    img {
      width: 30%;
    }
  }
`;
const Wraper = styled.div`
  padding: 10px 10px;
  margin: 4px 0 4px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #212529;
`;

const InnerWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 15px;

    span {
      color: #212529;
    }
  }
`;

const Icon = styled.div`
  border: ${(props) =>
    props.fileState ? "2px solid #3d69e1" : "2px solid #212529"};
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
