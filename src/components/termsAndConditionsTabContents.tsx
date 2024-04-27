import React, { useEffect, useState } from "react";
import * as DOMPurify from "dompurify";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

const TermsAndConditionsTabContents = ({ tabNumber, subCategory }) => {
  const [terms, setTerms] = useState();

  useEffect(() => {
    customAxios
      .get(`${API.TERMS}/detail`, {
        params: {
          category: "SIGN_UP",
          termsType: "HEAD_OFFICE",
          subCategory: subCategory,
        },
      })
      .then((res) => {
        const term = res.data.response;
        setTerms({
          id: term.id,
          title: term.title,
          content: term.content,
          isAgree: false,
          isToggle: false,
          toggleImage: "/topVector.png",
        });
      });
  }, [tabNumber, subCategory]);

  if (tabNumber === 1) {
    return (
      <div
        className="container_terms_and_conditions"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            String(terms?.content != null ? terms?.content : "")
          ),
        }}
      ></div>
    );
  } else if (tabNumber === 2) {
    return (
      <div
        className="container_terms_and_conditions"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            String(terms?.content != null ? terms?.content : "")
          ),
        }}
      ></div>
    );
  } else if (tabNumber === 3) {
    return (
      <div
        className="container_terms_and_conditions"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            String(terms?.content != null ? terms?.content : "")
          ),
        }}
      ></div>
    );
  } else {
    return null;
  }
};

export default TermsAndConditionsTabContents;
