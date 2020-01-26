export interface ContainerResponse {
        code: number;
        errorMessage: string;
        data: {
          containerID: string;
          size: string;
          treatment: string;
          dangerous: string;
          type: string;
          dueDate: number;
          customsStatus: string;
          manifest: string;
        };
}

export interface PhoneResponse {
        code: number;
        errorMessage: string;
        data: {};
}
