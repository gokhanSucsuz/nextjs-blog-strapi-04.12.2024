import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContents extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'contents';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialSocialMediaAccounts extends Struct.ComponentSchema {
  collectionName: 'components_social_social_media_accounts';
  info: {
    displayName: 'socialMediaAccounts';
  };
  attributes: {
    githubLink: Schema.Attribute.String & Schema.Attribute.Required;
    instagramLink: Schema.Attribute.String & Schema.Attribute.Required;
    linkedInLink: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.contents': ContentContents;
      'skills.skills': SkillsSkills;
      'social.social-media-accounts': SocialSocialMediaAccounts;
    }
  }
}
