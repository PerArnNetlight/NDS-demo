export const Instructions = () => {
  return (
    <div>
      <h1>Welcome to the NDS Workshop</h1>
      <p>
        We want you to take a look at our{" "}
        <a href="https://www.figma.com/file/hnudYJOqPU8RAneNWnGkvS/NDS-Workshop?type=design&node-id=1-213&mode=design&t=7axJOqN5g9L9ZdNu-0">
          figma page
        </a>{" "}
        and implement our components in a similar manner.
      </p>
      <p>
        These components, how to install and use them can be found at the NDS{" "}
        <a href="https://nds.edgez.live/">Storybook</a>. <br />
        In the Storybook, you will find a section about installing fonts. No
        need to worry about this part, as we have already taken care of this for
        you!
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        Happy coding!😁😁
        <img
          src="../vibe-rabbit.gif"
          style={{
            width: "2rem",
            borderRadius: "1rem",
            border: "1px solid black",
          }}
        />
      </div>
    </div>
  );
};
