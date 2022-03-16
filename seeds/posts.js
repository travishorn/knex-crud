import { randomUUID } from "node:crypto";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  await knex("posts").del();

  await knex("posts").insert([
    {
      id: randomUUID(),
      title: "Lorem Ipsum Dolor Sit Amet",
      content: "Consectetur adipiscing elit. Vivamus aliquet urna at diam auctor commodo. Pellentesque blandit turpis vel lobortis pulvinar. Suspendisse faucibus elementum vehicula. Phasellus at viverra neque. Proin rhoncus tristique porttitor. Vivamus euismod, erat vitae posuere finibus, ligula tellus laoreet quam, et posuere eros tortor sed magna. Fusce varius ullamcorper tortor. Etiam laoreet arcu ligula, in condimentum risus imperdiet quis. Vestibulum eget cursus arcu. Aliquam sit amet tortor metus. In fermentum convallis quam, eu hendrerit leo pretium et.",
    },
    {
      id: randomUUID(),
      title: "Phasellus Pharetra Urna",
      content: "Sit amet finibus accumsan. Praesent vitae nunc lacinia, eleifend tortor ut, consectetur eros. Nunc a diam quis leo dictum egestas. Etiam lacinia mauris id erat accumsan, a efficitur tellus molestie. Praesent varius condimentum nunc non tempor. Fusce auctor iaculis faucibus. Nunc vitae enim vitae lectus scelerisque pellentesque. Nunc vel imperdiet nisl, ac elementum ligula. Nullam vitae volutpat lectus. Aliquam pulvinar vestibulum viverra. Quisque nunc sapien, consectetur quis lectus eu, malesuada sagittis felis. Phasellus sit amet ligula dolor.",
    },
    {
      id: randomUUID(),
      title: "Duis Eleifend Orci Nec Felis Iaculis",
      content: "Id luctus nunc elementum. Morbi mollis ultrices justo, sit amet vestibulum libero laoreet ac. Quisque in purus accumsan, mattis augue ut, dapibus est. Morbi ipsum leo, eleifend at consectetur eu, pretium elementum odio. Etiam fringilla, nisl vitae suscipit sollicitudin, nisl dui viverra tellus, non porttitor tortor odio tristique nunc. Integer feugiat nisl ex, et iaculis turpis consequat vitae. Vivamus venenatis, tellus sed pharetra elementum, dui nulla imperdiet magna, a sollicitudin ligula lectus non urna. Sed sed mattis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nec dui vitae elit vulputate rhoncus vitae ut erat. Cras aliquet orci quis orci pharetra ultrices. Integer vehicula vulputate lobortis. Nunc convallis, nisl eu pharetra euismod, urna augue auctor neque, et feugiat metus felis eu lacus. Maecenas tristique a tortor sed laoreet. Nulla efficitur faucibus velit, et gravida nisl.",
    },
  ]);
};
