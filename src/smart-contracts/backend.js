export const idlFactory = ({ IDL }) => {
    const Profile = IDL.Record({
      'principal' : IDL.Text,
      'username' : IDL.Text,
      'avatar' : IDL.Vec(IDL.Nat8),
    });
    return IDL.Service({
      'add_tune' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
      'authentication' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
      'get_original_tune' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
      'get_original_tune_list' : IDL.Func(
          [IDL.Nat64],
          [IDL.Vec(IDL.Text)],
          ['query'],
        ),
      'get_user_tune' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], ['query']),
      'get_user_tune_list' : IDL.Func(
          [IDL.Text, IDL.Nat64],
          [IDL.Vec(IDL.Text)],
          ['query'],
        ),
      'init' : IDL.Func([], [], []),
      'update_profile' : IDL.Func(
          [IDL.Text, IDL.Text, IDL.Vec(IDL.Nat8)],
          [Profile],
          [],
        ),
    });
  };
  export const init = ({ IDL }) => { return []; };
  