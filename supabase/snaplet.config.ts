// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path=".snaplet/snaplet.d.ts" />
// This config was generated by Snaplet make sure to check it over before using it.
import { copycat, faker } from '@snaplet/copycat'
import { defineConfig } from 'snaplet'
copycat.setHashKey('kWn8mdNrCuJSEJep')

// replace all non-alphanumeric characters with a dash
const tagName = (tag: string) => {
  const newTag = copycat.username(tag).replace(/[^a-zA-Z0-9]/gi, '_')
  if (newTag.length > 20) {
    return newTag.substring(0, 20)
  }
  return newTag
}

export default defineConfig({
  select: {
    auth: {
      audit_log_entries: false,
      flow_state: false,
      identities: false,
      instances: false,
      mfa_amr_claims: false,
      mfa_challenges: false,
      mfa_factors: false,
      refresh_tokens: false,
      saml_providers: false,
      saml_relay_states: false,
      sessions: false,
      sso_domains: false,
      sso_providers: false,
    },
    dbdev: false,
    extensions: false,
    graphql: false,
    graphql_public: false,
    pgsodium: false,
    pgsodium_masks: false,
    pgtle: false,
    realtime: false,
    vault: false,
  },
  transform: {
    auth: {
      users({ row }) {
        return {
          email: copycat.email(row.email, {
            limit: 255,
          }),
          phone: `1${copycat.phoneNumber(row.phone).replace('+', '')}`, // supabase does not store the + in the phone number
          password: false,
        }
      },
    },
    storage: {
      buckets({ row }) {
        return {}
      },
      objects({ row }) {
        return {}
      },
    },
    public: {
      profiles({ row }) {
        return {
          name: copycat.fullName(row.name),
          about: copycat.sentence(row.about),
          referral_code: copycat.hex(row.referral_code),
        }
      },
      tags({ row }) {
        return {
          name: tagName(row.name),
        }
      },
      distribution_verifications({ row }) {
        if (row.metadata === null) {
          return {}
        }

        const { metadata } = row as any

        if (metadata.tag) {
          metadata.tag = tagName(metadata.tag)
        }

        return {
          metadata: {
            ...metadata,
          },
        }
      },
      referrals({ row }) {
        return {
          tag: tagName(row.tag),
        }
      },
      tag_receipts({ row }) {
        return {
          tag_name: tagName(row.tag_name),
        }
      },
      tag_reservations({ row }) {
        return {
          tag_name: tagName(row.tag_name),
        }
      },
    },
  },
})
